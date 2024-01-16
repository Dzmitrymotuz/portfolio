<?php

namespace Database\Seeders;

use App\Models\ProjectsUser;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ProductSeeder::class,
            ProjectsSeeder::class,
            UserSeeder::class,
            ProjectsUserSeeder::class,
            UserTicketsSeeder::class,
            CommentsSeeder::class, 
        ]);
        
    }
}
