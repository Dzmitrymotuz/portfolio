<?php

namespace App\Http\Controllers;

use App\Models\UserTickets;
use Illuminate\Http\Request;

class UserTicketsController extends Controller
{
    public function fetch_tickets(Request $request) {
        $perPage = $request->query('perPage', 10);
        $tickets = UserTickets::orderBy('id', 'desc')->paginate($perPage);
        return response()->json(['tickets'=>$tickets]);
    }
    public function create_ticket(Request $request) {
        $request -> validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'priority' => 'required|integer',
            'reporter'=> 'required|string',
            'assign'=> 'required|string'
        ]);
        UserTickets::create([
            'title' => $request->title,
            'description'=> $request->description,
            'priority'=> $request->priority,
            'reporter'=> $request->reporter,
            'assignee'=> $request->assign,
            'status'=> $request->status,
        ]);
        return response()->json('Good', 200);
    }
    public function fetch_ticket_id ($id) {
        $ticket = UserTickets::find($id);
        return response()->json(['ticket'=>$ticket], 200);
    }
}