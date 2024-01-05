<?php

namespace App\Http\Controllers;

use App\Models\UserTickets;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function getPostComments ($id) {
        $ticket = UserTickets::find($id);
        $comments = $ticket->comments;
        return response()->json(['comments'=>$comments]);
    }
}
