<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Projects;
use App\Models\UserTickets;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function get_all_projects() {
        $projects = Projects::with('user_tickets')->get();
        return response()->json(['projects'=>$projects]);
    }
    public function get_all_user_projects(Request $request) {
        $id = $request->query('id');
        $user = User::find($id);
        $connectedProjects = $user->projects;
        return response()->json(['projects'=>$connectedProjects]);
    }
    public function fetch_project($id) {
        $project = Projects::with('user_tickets')->find($id);
        return response()->json(['project'=>$project]);
    }
    public function fetch_project_users($id) {
        $project = Projects::find($id);
        $allUsers = User::all();
        $connectedUsers = $project->users;
        $notConnectedUsers = $allUsers->diff($connectedUsers);
        return response()->json(['project'=>$project, 'connectedUsers'=>$connectedUsers, 'notConnectedUsers'=>$notConnectedUsers]);
    }
    public function delete_project($id) {
        $project = Projects::find($id);
        UserTickets::where('project_id', $id)->update(['project_id'=>null]);
        $project->users()->detach();
        Projects::destroy($id);
        return response()->json(['Project deleted'], 200);
    }
    public function create_project(Request $request) {

        $request -> validate([
            'project_name' => 'required|string',
            'description' => 'required|string',
            'attachments' => 'required|image|mimes:jpeg,png,jpg,gif',
            'board_id'=> 'nullable',
            'goals'=> 'nullable',
            'releases'=> 'nullable',
            'status'=> 'nullable',
        ]);
        $project = new Projects([
            'name' => $request->project_name,
            'description'=> $request->description,
            'board_id'=> $request->board_id,
            'goals'=> $request->goals,
            'releases'=> $request->releases,
            'status'=> $request->status,
        ]);
        if ($request->hasFile('attachments')) {
            $image = $request->file('attachments');
            $imageName = time() . '.' .$image->getClientOriginalExtension();
            $reactPublicPath = '/Users/dzmitrymotuz/react/DM/public/uploads/';
            $image->move($reactPublicPath, $imageName);
            $project->attachments = 'public/uploads/'. $imageName;
        }
        $project->save();
      
        return response()->json(['message' => 'Project created successfully', 'project'=>$project], 200);
    }
    public function edit_project(Request $request, $id) {
        $request -> validate([
            'name' => 'string',
            'description' => 'string',
        ]);
        $project = Projects::find($id);
        if (!$project) {
            return response()->json(['error' => 'Project not found'], 404);
        }
        $project -> update([
            'name' => $request->name,
            'description' => $request->description,
        ]);
        if ($request->hasFile('attachments')) {
            $image = $request->file('attachments');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $reactPublicPath = '/Users/dzmitrymotuz/react/DM/public/uploads/';
            $image->storeAs($reactPublicPath, $imageName);
            $project->attachments = '/public/uploads/'. $imageName;
        };
      
        return response()->json(['message' => 'Project updated successfully', 'project' => $project], 200);
    }
    public function update_project_photo (Request $request, $id) {
        $request->validate([
            'attachments' => 'image|mimes:jpeg,png,jpg,gif|',
        ]);
        $project = Projects::find($id);
        if ($request->hasFile('attachments')) {
            $image = $request->file('attachments');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->move('/Users/dzmitrymotuz/react/DM/public/uploads/', $imageName);
            $project->update(['attachments' => '/public/uploads/'. $imageName]);
        }
        return response()->json(['message'=>'Image Updated'], 200);
    }
    public function dismiss_user_from_project(Request $request) {
        $request -> validate([
            'user_id' => 'integer',
            'project_id' => 'integer',
        ]);
        $project = Projects::find($request->input('project_id'));
        $project->users()->detach($request->input('user_id'));
        return response()->json(['message'=>'User Dismissed'], 200);
    }
}
