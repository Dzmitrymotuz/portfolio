<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use App\Models\UserTickets;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function post_comment (Request $request) {
        $comment = Comments::create([
            'ticket_id'=>$request->ticket_id,
            'user_id'=>$request->user_id,
            'content'=>$request->content,

        ]);
        return response()->json('111', 200);
    }
}
