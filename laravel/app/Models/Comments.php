<?php

namespace App\Models;

use App\Models\UserTickets;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comments extends Model
{
    use HasFactory;

    public function ticket() {
        return $this->belongsTo(UserTickets::class);
    }
}
