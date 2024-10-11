<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Rizky Wahyu Prasetiyo',
            'email' => 'rizky@gmail.com',
            'password' => bcrypt('password')
        ]);

        User::factory(20000)->create();
    }
}
