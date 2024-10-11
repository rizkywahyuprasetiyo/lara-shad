<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public $loadDefault = 20;

    public function index(Request $request)
    {
        $query = User::query();

        if ($request->q) {
            $query->where('name', 'like', '%' . $request->q . '%')
                ->orWhere('email', 'like', '%' . $request->q . '%');
        }

        $users = (
            UserResource::collection($query->paginate($request->load))
        )->additional([
            'attributes' => [
                'total' => User::count(),
                'per_page' => $this->loadDefault,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
            ]
        ]);

        return Inertia::render('User', [
            'users' => $users
        ]);
    }
}
