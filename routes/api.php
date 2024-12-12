<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\InstansiController;
use App\Http\Controllers\Api\OrganizationsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/instansi', [InstansiController::class, 'store']);
Route::post('/organizations', [OrganizationsController::class, 'store']);
