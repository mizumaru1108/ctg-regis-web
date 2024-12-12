<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instansi extends Model
{
    use HasFactory;

    protected $table = 'instansi'; // Ensure this matches your database table name
    protected $fillable = ['nama_instansi', 'nomor_instansi'];
}
