<?php

namespace App\Services;

use App\Repositories\User\UserRepositoryInterface;

class UserService
{
    /**
     *
     * @var UserRepositoryInterface
     */
    private $userRepository;

    /**
     * UserService constructor.
     *
     * @param UserRepositoryInterface $userRepository
     */
    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Test Function
     *
     * @return mixed
     */
    public function test()
    {
        return $this->userRepository->testFunction();
    }
}
