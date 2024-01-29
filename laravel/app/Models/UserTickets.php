<?php

namespace App\Models;

use App\Models\Comments;
use App\Models\Projects;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserTickets extends Model
{
    use HasFactory;

    public function comments() {
        return $this->hasMany(Comments::class, 'ticket_id');
    }
    public function projects() {
        return $this->belongsTo(Projects::class, 'project_id');
    }
    public function users() {
        return $this->belongsTo(User::class, 'name');
    }

    // protected $guarded = [];

    protected $fillable = [
        'title',
        'project_id',
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
