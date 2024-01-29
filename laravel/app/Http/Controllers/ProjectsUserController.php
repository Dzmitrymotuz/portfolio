<?php

namespace App\Http\Controllers;

use App\Models\ProjectsUser;
use Illuminate\Http\Request;

class ProjectsUserController extends Controller
{
    public function add_project_users (Request $request) {
        $request -> validate([
            'users'=>'array',
            'project_id'=>'integer',
        ]);
        foreach ($request->input('users') as $user_id) {
            ProjectsUser::create([
                'user_id'=>$user_id,
                'project_id'=>$request->input('project_id'),
            ]);
        };
        return response()->json(['message'=>'Users added'], 200);
    }

}
