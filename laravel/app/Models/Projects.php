<?php

namespace App\Models;

use App\Models\User;
use App\Models\UserTickets;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Projects extends Model
{
    use HasFactory;

    public function user_tickets() {
        return $this->hasMany(UserTickets::class, 'project_id');
    }
    public function users() {
        return $this->belongsToMany(User::class, 'projects_users', 'project_id');
    }

    protected $fillable = [
        'name',
        'description',
        'status',
        'attachments',
        'board_id',
        'goals',
        'releases',
    ];
}
