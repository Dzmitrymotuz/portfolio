<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index () {
        $user = Auth::user();
        return response()->json(['user'=>$user]);
    }
    public function getall () {
        $users = User::all();
        return response()->json($users);
    }
    public function assignee (Request $request) {
        $assignees = User::where('role', 'user')->get();
        return response()->json($assignees);
    }
}
