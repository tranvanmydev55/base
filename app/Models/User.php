<?php

namespace App\Models;

use App\Enums\FavoriteEnum;
use App\Enums\HiddenEnum;
use App\Enums\LikeEnum;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, HasRoles, HasApiTokens;

    protected $guard_name = 'api';

    protected $fillable = [
        'name',
        'email',
        'password',
        'country_code',
        'phone',
        'gender',
        'birthday',
        'type',
        'expiry_date',
        'url',
        'description',
        'status',
        'point',
        'avatar',
        'cover_image',
        'bio',
        'website',
        'address',
        'location_lat',
        'location_long',
        'location_name',
        'created_by',
        'updated_by',
        'deleted_by',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
