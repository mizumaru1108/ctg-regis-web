<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Instansi;
use Illuminate\Http\Request;

class InstansiController extends Controller
{
    public function store(Request $request)
    {

        $validator = validator($request->all(), [
            'nama_instansi' => 'required|string',
            'nomor_instansi' => 'required|string|unique:instansi,nomor_instansi',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Data validation error.',
                'data' => $validator->errors(),
            ], 422);
        }

        $instansi = Instansi::create($request->all());

        return response()->json([
            'message' => 'Instansi created successfully.',
            'data' => $instansi,
        ], 201);
    }
}
