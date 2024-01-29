<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class RegisterController extends Controller
{
    public function login (Request $request) {
        $credentials = $request->validate ([
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:4',
        ]);
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password incorrect',
            ], 401);
        }
        /** @var User $user */
        $user = Auth::user();
        if ($user) {
            $token = $user->createToken('main')->plainTextToken;
            $cookie = cookie('jwt', $token, 60*24);
            return response()->json(['message' => 'login succesfull', 'token'=>$token, 'user'=>$user]);
        }
        return response(['message' => 'User not found']);
    }
    public function logout (Request $request) {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response()->json(['message' => 'logout succesfull'], 200);
    }

    public function signup (Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|string|min:4|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        /** @var User $authenticatedUser */
        Auth::login($user);
        $authenticatedUser = Auth::user();
        $token = $authenticatedUser->createToken('authToken')->plainTextToken;  
        return response()->json(['message'=>'User registered successfully', 'token'=>$token, 'user'=>$authenticatedUser]);   
    }
}
