<?php

namespace App\Models;

use App\Models\User;
use App\Models\UserTickets;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comments extends Model
{
    use HasFactory;

    public function ticket() {
        return $this->belongsTo(UserTickets::class, 'ticket_id');
    }
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
    protected $fillable = [
        'id',
        'ticket_id',
        'user_id',
        'content',
        'image',
    ];
}
