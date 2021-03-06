package com.g5.p2.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.g5.p2.models.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
  Users findByUserId(Integer userId);

  @Query(value = "SELECT * FROM users WHERE username LIKE :username", nativeQuery = true)
  List<Users> findLikeUsername(String username);

  Users findByUsername(String username);

  Users findByUsernameAndPassword(String username, String password);
}
