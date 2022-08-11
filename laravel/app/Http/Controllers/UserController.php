<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $user = User::get();

        $data['user'] = [];
        $data['sesi'] = [];

        foreach ($user as $item) {
            $data['user'][] = $item->email;

            if($item->login_at && $item->logout_at){

                $newDate = Carbon::createFromFormat('Y-m-d H:i:s', $item->login_at);
                $result = Carbon::createFromFormat('Y-m-d H:i:s', $item->logout_at)->diff($newDate)->s;

                $data['sesi'][] = $result;

            }else{
                $data['sesi'][] = 0;
            }
        }

        return view('welcome', $data);
    }
}
