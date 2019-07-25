<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OnepageController extends Controller
{
    //

    function __invoke(){
        return view('main');
    }
}
