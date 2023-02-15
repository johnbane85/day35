package sg.edu.nus.day35.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import sg.edu.nus.day35.models.Game;

import static sg.edu.nus.day35.repositories.Queries.*;

import java.util.LinkedList;
import java.util.List;

@Repository
public class GameRepository {

  @Autowired
  private JdbcTemplate template;

  public List<Game> findGamesByName(String name) {
    List<Game> games = new LinkedList<>();

    SqlRowSet rs = template.queryForRowSet(SQL_SELECT_GAME_BY_NAME, name);
    while (rs.next())
      games.add(Game.create(rs));

    return games;
  }

}
