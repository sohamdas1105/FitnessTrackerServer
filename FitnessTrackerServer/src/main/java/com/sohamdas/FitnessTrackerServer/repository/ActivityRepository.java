package com.sohamdas.FitnessTrackerServer.repository;


import com.sohamdas.FitnessTrackerServer.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {

}
