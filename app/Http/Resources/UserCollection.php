<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */

    public $loadDefault = 20;

    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
            'attributes' => [
                'total' => User::count(),
                'per_page' => $this->loadDefault,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'direction' => $request->direction ?? '',
                'field' => $request->field ?? ''
            ]
        ];
    }
}
