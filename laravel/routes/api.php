<?php

use App\Models\UserTickets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\UserTicketsController;
use App\Http\Controllers\ProjectsUserController;
use App\Http\Controllers\Auth\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('/products', [ProductController::class, 'index']);

Route::post('/signup', [RegisterController::class, 'signup']);
Route::post('/login', [RegisterController::class, 'login']);
Route::post('/logout', [RegisterController::class, 'logout']);

// Butrag
Route::get('/bugtrag', [UserTicketsController::class, 'fetch_tickets']);
Route::get('/bugtrag-inprogress', [UserTicketsController::class, 'fetch_inprogress_tickets']);
Route::get('/bugtrag-done', [UserTicketsController::class, 'fetch_done_tickets']);
// Users
Route::get('/bugtrag/assignee', [UserController::class, 'assignee']);
Route::get('/bugtrag/getall', [UserController::class, 'getall']);
Route::get('/bugtrag/user_tickets', [UserTicketsController::class, 'fetch_user_tickets']);
Route::put('/bugtrag/{id}/password_change', [UserController::class, 'change_password']);
//Tickets
Route::post('/bugtrag/create_ticket', [UserTicketsController::class, 'create_ticket']);
Route::put('/bugtrag/edit-ticket/{id}', [UserTicketsController::class, 'edit_ticket']);
Route::post('/bugtrag/update-ticket-photo/{id}', [UserTicketsController::class, 'update_ticket_photo']);
Route::get('/bugtrag/fetch_ticket_id/{id}', [UserTicketsController::class, 'fetch_ticket_id']);
Route::post('/bugtrag/post_comment', [CommentController::class, 'post_comment']);
Route::delete('/bugtrag/delete_ticket/{id}', [UserTicketsController::class, 'delete_ticket']);
Route::put('/bugtrag/change_status/{id}', [UserTicketsController::class, 'change_status']);
Route::put('/bugtrag/change-project/{id}', [UserTicketsController::class, 'change_project']);
Route::put('/bugtrag/watching/{id}', [UserTicketsController::class, 'handle_watch']);
// Bugtrag Projects
Route::get('/bugtrag/get_all_projects', [ProjectsController::class, 'get_all_projects']);
Route::get('/bugtrag/get_all_user_projects', [ProjectsController::class, 'get_all_user_projects']);

Route::post('/bugtrag/projects/create', [ProjectsController::class, 'create_project']);
Route::get('/bugtrag/fetch_project/{id}', [ProjectsController::class, 'fetch_project']);
Route::get('/bugtrag/fetch_project_users/{id}', [ProjectsController::class, 'fetch_project_users']);
Route::put('/bugtrag/edit-project/{id}', [ProjectsController::class, 'edit_project']);
Route::post('/bugtrag/delete-project/{id}', [ProjectsController::class, 'delete_project']);
Route::post('/bugtrag/update-project-photo/{id}', [ProjectsController::class, 'update_project_photo']);
//Project-User
Route::post('/bugtrag/add_users_to_projects', [ProjectsUserController::class, 'add_project_users']);
Route::put('/bugtrag/dismiss_user_from_project', [ProjectsController::class, 'dismiss_user_from_project']);
// Components
Route::get('/bugtrag/tickets_search', [UserTicketsController::class, 'search_ticket']);


