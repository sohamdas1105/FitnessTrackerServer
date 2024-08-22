package com.sohamdas.FitnessTrackerServer.services.activity;

import com.sohamdas.FitnessTrackerServer.dto.ActivityDTO;

import java.util.List;

public interface ActivityService {

    ActivityDTO postActivity(ActivityDTO dto);

    List<ActivityDTO> getActivities();
}
