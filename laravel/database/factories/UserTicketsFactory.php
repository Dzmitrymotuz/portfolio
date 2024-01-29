<?php

namespace Database\Factories;

use App\Models\UserTickets;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserTickets>
 */
class UserTicketsFactory extends Factory
{
    protected $model = UserTickets::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->name(),
            'project_id' => null,
            'description' => fake()->text(),
            'status' => 'To Do',
            'priority' => fake()->randomElement([1,2,3]),
            'reporter' => fake()->name(),
            'assignee' => 'None',
            'watch' => fake()->boolean(),
            'linked_issues' => null,
        ];
    }
    protected $table = 'bug_tickets';
}
