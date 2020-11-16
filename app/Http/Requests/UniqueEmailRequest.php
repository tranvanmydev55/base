<?php

namespace App\Http\Requests;

use App\Rules\SecurePasswordRule;
use App\Http\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;

class UniqueEmailRequest extends FormRequest
{
    use FailedValidation;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|string|email|unique:users'
        ];
    }
}
