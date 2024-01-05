<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->string('status')->default('To Do')->nullable();
            $table->text('attachments')->nullable();
            $table->text('comments')->nullable();
            $table->string('priority')->nullable();
            $table->string('reporter')->nullable();
            $table->string('assignee')->default('None')->nullable();
            $table->boolean('watch')->default(1);
            $table->text('linked_issues')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_tickets');
    }
};
