package sg.edu.nus.day35.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.edu.nus.day35.models.Game;
import sg.edu.nus.day35.repositories.GameRepository;

@Service
public class BGGService {

  @Autowired
  private GameRepository gameRepo;

  public List<Game> findGameByName(String name) {
    return gameRepo.findGamesByName("%%%s%%".formatted(name));
  }

}
