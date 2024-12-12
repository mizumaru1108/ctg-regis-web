<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Organizations;
use Illuminate\Http\Request;

class OrganizationsController extends Controller
{
    public function store(Request $request)
    {

        $validator = validator($request->all(), [
            'nama' => 'required|string',
            'nomor_telpon' => 'required|string',
            'email' => 'required|email|unique:organizations,email',
            'nomor_instansi' => 'required|string',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Data validation error.',
                'data' => $validator->errors(),
            ], 422);
        }

        $org = Organizations::create($request->all());

        return response()->json([
            'message' => 'User created successfully.',
            'data' => $org,
        ], 201);
    }
}

