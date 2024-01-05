<?php

use App\Models\UserTickets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserTicketsController;
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
Route::get('/products', [ProductController::class, 'index']);

Route::post('/signup', [RegisterController::class, 'signup']);
Route::post('/login', [RegisterController::class, 'login']);

// Butrag
Route::get('/bugtrag', [UserTicketsController::class, 'fetch_tickets']);
Route::get('/bugtrag/assignee', [UserController::class, 'assignee']);
Route::post('/bugtrag/create_ticket', [UserTicketsController::class, 'create_ticket']);
Route::get('/bugtrag/fetch_ticket_id/{id}', [UserTicketsController::class, 'fetch_ticket_id']);

