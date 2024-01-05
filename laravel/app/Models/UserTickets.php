<?php

namespace App\Models;

use App\Models\Comments;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserTickets extends Model
{
    use HasFactory;
    
    public function comments() {
        return $this->hasMany(Comments::class);
    }

    protected $fillable = [
        'title',
        'description',
        'status',
        'attachments',
        'comments',
        'priority',
        'reporter',
        'assignee',
        'watch',
        'linked_issues',
    ];
}
