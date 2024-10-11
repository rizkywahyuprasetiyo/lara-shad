<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserCollection;
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

        if ($request->has(['field', 'direction'])) {
            $query->orderBy($request->field, $request->direction);
        }

        $users = new UserCollection($query->paginate($request->load));

        return Inertia::render('User', [
            'users' => $users
        ]);
    }

    public function simpan(UserRequest $userRequest)
    {
        $data = $userRequest->validated();

        User::create($data);

        return back()->with([
            'status' => 'success',
            'message' => 'Data user berhasil ditambahkan.'
        ]);
    }
}
