<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserTickets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserTicketsController extends Controller
{
    public function fetch_tickets(Request $request) {
        $perPage = $request->query('perPage', 10);
        $tickets = UserTickets::orderBy('id', 'desc')->paginate($perPage);
        return response()->json(['tickets'=>$tickets]);
    }
    public function fetch_user_tickets(Request $request) {
        $id = $request->query('id');
        $user = User::find($id);
        $tickets = $user->userTickets()->orderBy('reporter')->paginate(); 
        return response()->json(['tickets'=>$tickets, 'user'=>$user]);
    }
    public function fetch_inprogress_tickets(Request $request) {
        $perPage = $request->query('perPage', 10);
        $tickets = UserTickets::where('status', 'In Progress')->paginate($perPage);
        return response()->json(['tickets'=>$tickets]);
    }
    public function fetch_done_tickets(Request $request) {
        $perPage = $request->query('perPage', 10);
        $tickets = UserTickets::where('status', 'Done')->paginate($perPage);
        return response()->json(['tickets'=>$tickets]);
    }
    public function create_ticket(Request $request) {
        Log::info('Received Data:', $request->all());

        $request -> validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'priority' => 'required|integer',
            'reporter'=> 'required|string',
            'assign'=> 'required|string',
            'project_id' => 'integer', 
            'image' => 'image|mimes:jpeg,png,jpg,gif',
        ]);
        $ticket = new UserTickets([
            'title' => $request->title,
            'description'=> $request->description,
            'priority'=> $request->priority,
            'reporter'=> $request->reporter,
            'assignee'=> $request->assign,
            'status'=> $request->status,
            'project_id'=>$request->project_id,
        ]);
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' .$image->getClientOriginalExtension();
            $reactPublicPath = '/Users/dzmitrymotuz/react/DM/public/uploads/';
            $image->move($reactPublicPath, $imageName);
            $ticket->attachments = 'public/uploads/'. $imageName;
        }
        $ticket->save();
      
        return response()->json(['message' => 'Ticket created successfully', 'ticket' => $ticket], 200);
    }
    public function update_ticket_photo(Request $request, $id) {
        $request->validate([
            'attachments'=>'image',
        ]);
        $ticket = UserTickets::find($id);
        $image = $request->file('attachments');
        $imageName = time().'.'.$image->getClientOriginalExtension();
        $reactPublicPath = '/Users/dzmitrymotuz/react/DM/public/uploads/';
        $image->move($reactPublicPath, $imageName);
        $ticket->update(['attachments'=>'/public/uploads/'.$imageName]);
        return response()->json(['image updated bro'], 200);
    }
    public function edit_ticket(Request $request, $id) {
        $request -> validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'priority' => 'required|integer',
            'reporter'=> 'required|string',
            'assign'=> 'required|string',
            'project_id' => 'integer', 
            'image' => 'image|mimes:jpeg,png,jpg,gif',
        ]);
        $ticket = UserTickets::find($id);
        if (!$ticket) {
            return response()->json(['error' => 'Ticket not found'], 404);
        }
        $ticket -> update([
            'title' => $request->title,
            'description'=> $request->description,
            'priority'=> $request->priority,
            'reporter'=> $request->reporter,
            'assignee'=> $request->assign,
            'status'=> $request->status,
            'project_id'=>$request->project_id,
        ]);
      
        return response()->json(['message' => 'Ticket updated successfully', 'ticket' => $ticket], 200);
    }
    public function fetch_ticket_id ($id) {
        $ticket = UserTickets::with('comments.user', 'projects')->find($id);
        return response()->json(['ticket'=>$ticket], 200);
    }
    public function delete_ticket ($id) {
        UserTickets::destroy($id);
        return response()->json(['Ticket deleted', 200]);
    }
    public function change_status (Request $request, $id) {
        $request->validate ([
            'status'=>'string',
        ]
        );
        $ticket = UserTickets::find($id);
        $ticket->update(['status' => $request->status]);
        return response()->json(['Ticket status updated', 200]);
    }
    public function change_project (Request $request, $id) {
        $request->validate ([
            'project_id'=>'integer|nullable',
        ]
        );
        $ticket = UserTickets::find($id);
        $ticket->update(['project_id' => $request->project_id ?? null]);
        return response()->json(['Project status updated', 200]);
    }
    public function handle_watch (Request $request, $id) {
        $request->validate ([
            'watch'=>'integer'
        ]);
        $ticket = UserTickets::find($id);
        $ticket->update(['watch' => $request->watch]);
        return response()->json(['ticket'=>$ticket]);
    }
    public function search_ticket(Request $request) {
        $query = $request->query('query');
        $tickets = UserTickets::where('title', 'like', "%$query%")->paginate(10000);
        return response()->json(['tickets'=>$tickets], 200);
    }
}
       