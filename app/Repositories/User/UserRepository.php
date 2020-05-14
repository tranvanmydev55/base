<?php

namespace App\Repositories\User;

use App\Models\User;
use Illuminate\Http\Request;
use App\Repositories\BaseRepository;
use Illuminate\Database\DatabaseManager;
use App\Repositories\User\UserRepositoryInterface;

/**
 * Class UserRepository
 *
 * @package App\Repositories\User
 */
class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    /**
     * @var User
     */
    protected $model;

    /**
     * @var DatabaseManager
     */
    private $db;

    /**
     * UserRepository constructor.
     *
     * @param User $model
     * @param DatabaseManager $db
     */
    public function __construct(User $model, DatabaseManager $db)
    {
        parent::__construct($model);

        $this->db = $db;
    }

    public function testFunction()
    {
        return 1;
    }
}
