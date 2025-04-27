const teamsData = [
    {
      id: "lakers",
      name: "Los Angeles Lakers",
      logo: "/images/lakers_logo.png",
      history: `The Los Angeles Lakers, founded in 1947, are one of the most storied franchises in NBA history. With a legacy built by legends such as Magic Johnson, Kareem Abdul-Jabbar, Shaquille O'Neal, and Kobe Bryant, the Lakers have claimed numerous championships over the decades. Based in Los Angeles, California, they have become a symbol of basketball excellence and global appeal. Their iconic purple and gold colors are recognized worldwide, and their fanbase stretches across continents. The team currently features superstars like LeBron James and Anthony Davis, continuing their tradition of greatness.`
    },
    {
      id: "warriors",
      name: "Golden State Warriors",
      logo: "/images/warriors_logo.png",
      history: `The Golden State Warriors were established in 1946 and have evolved into a powerhouse in modern basketball. Known for their revolutionary style of play centered around three-point shooting and ball movement, the Warriors have won multiple championships in the 2010s under the leadership of Stephen Curry, Klay Thompson, and Draymond Green. Coached by Steve Kerr, the team has set records for wins in a season and has been widely credited with changing the way basketball is played.`
    },
    {
      id: "celtics",
      name: "Boston Celtics",
      logo: "/images/celtics_logo.png",
      history: `The Boston Celtics are one of the oldest and most successful teams in the NBA, founded in 1946. With 17 championships to their name, the Celtics have a tradition of excellence built by players like Bill Russell, Larry Bird, and Paul Pierce. Known for their passionate fan base and rich history, they are a cornerstone of the league. The team continues to be competitive, with stars like Jayson Tatum and Jaylen Brown leading a new era of Celtics basketball.`
    },
    {
      id: "bucks",
      name: "Milwaukee Bucks",
      logo: "/images/bucks_logo.png",
      history: `Founded in 1968, the Milwaukee Bucks are a team that has seen great highs and lows over their history. The franchise's most prominent eras have been led by Kareem Abdul-Jabbar in the 1970s and Giannis Antetokounmpo in recent years. With a passionate fanbase in Wisconsin, the Bucks claimed the 2021 NBA Championship, showcasing a strong blend of teamwork, defense, and star power. The team continues to be a formidable force in the Eastern Conference.`
    },
    {
      id: "suns",
      name: "Phoenix Suns",
      logo: "/images/suns_logo.png",
      history: `The Phoenix Suns, founded in 1968, have been a consistent presence in the NBA's Western Conference. Known for their high-tempo offense and electric atmosphere in home games, the Suns reached the NBA Finals multiple times, most recently in 2021. With stars like Kevin Durant and Devin Booker, the team is once again a serious contender. Phoenix fans are hopeful that a championship is on the horizon for this exciting and dynamic squad.`
    },
    {
      id: "nuggets",
      name: "Denver Nuggets",
      logo: "/images/nuggets_logo.png",
      history: `The Denver Nuggets, established in 1967, began their journey in the ABA before joining the NBA in 1976. Over the decades, the Nuggets have built a strong identity with high-scoring offenses and passionate fans. Led by Nikola Jokic, a generational talent and multiple-time MVP, the team has found new success, culminating in their first NBA Championship in 2023. Denver continues to be a strong force in the Western Conference.`
    },
    {
      id: "heat",
      name: "Miami Heat",
      logo: "/images/heat_logo.png",
      history: `The Miami Heat were established in 1988 and quickly became a dominant team in the NBA. Known for their grit, defense, and the "Heat Culture," they have won multiple championships, particularly during the LeBron James, Dwyane Wade, and Chris Bosh era. Under the leadership of Pat Riley and Erik Spoelstra, the Heat continue to thrive with stars like Jimmy Butler and Bam Adebayo, consistently challenging for playoff success.`
    },
    {
      id: "knicks",
      name: "New York Knicks",
      logo: "/images/knicks_logo.png",
      history: `The New York Knicks, one of the NBA's original teams, were founded in 1946 and are based in the basketball mecca of Madison Square Garden. Despite decades of ups and downs, the Knicks remain one of the most iconic franchises in the league. With a loyal fanbase and a storied past that includes legends like Walt Frazier and Patrick Ewing, the team is currently rebuilding around young talents like Jalen Brunson and Julius Randle.`
    },
    {
      id: "realmadrid",
      name: "Real Madrid",
      logo: "/images/realmadrid_logo.png",
      history: `Founded in 1902, Real Madrid is one of the most decorated football clubs in history. With a record number of UEFA Champions League titles, the club has hosted legends like Alfredo Di Stéfano, Raúl, Zinedine Zidane, and Cristiano Ronaldo. Known for their all-white kits and Galácticos era, Real Madrid's success and influence extend far beyond Spain, symbolizing football excellence across the globe.`
    },
    {
      id: "arsenal",
      name: "Arsenal",
      logo: "/images/arsenal_logo.png",
      history: `Established in 1886, Arsenal is one of the most successful clubs in English football. Known for their Invincibles season in 2003–04, when they went unbeaten in the Premier League, the club has a legacy of playing attractive, attacking football. Based at the Emirates Stadium in London, Arsenal continues to compete at the top level under manager Mikel Arteta, with a new generation of young, exciting talent.`
    },
    {
      id: "inter",
      name: "Inter Milan",
      logo: "/images/inter_logo.png",
      history: `Inter Milan, officially known as FC Internazionale Milano, was founded in 1908 and has long been a powerhouse in Italian and European football. The club has won multiple Serie A titles and Champions League trophies. Known for its passionate fan base and fierce rivalry with AC Milan, Inter remains a dominant force, recently reclaiming the Serie A title and competing regularly in the UEFA Champions League.`
    },
    {
      id: "bayern",
      name: "Bayern Munich",
      logo: "/images/bayern_logo.png",
      history: `Bayern Munich is the most successful club in German football history. Founded in 1900, they have claimed numerous Bundesliga and UEFA Champions League titles. The team is renowned for its efficiency, world-class facilities, and a roster that consistently features international stars. Bayern’s dominance in the domestic league and strong showings in Europe have made them a true footballing giant.`
    },
    {
      id: "barcelona",
      name: "Barcelona",
      logo: "/images/barcelona_logo.png",
      history: `FC Barcelona, founded in 1899, is one of the world’s most beloved clubs, known for its motto “Més que un club” (More than a club). With legends like Johan Cruyff, Ronaldinho, and Lionel Messi having donned the Blaugrana shirt, Barcelona has a proud tradition of attacking football and La Masia academy. The club’s fierce rivalry with Real Madrid in El Clásico is one of the most-watched fixtures globally.`
    },
    {
      id: "dortmund",
      name: "Borussia Dortmund",
      logo: "/images/dortmund_logo.png",
      history: `Borussia Dortmund, or BVB, was founded in 1909 and is one of Germany’s top football clubs. Known for its yellow and black kits and the iconic "Yellow Wall" of supporters at Signal Iduna Park, Dortmund has enjoyed domestic and European success. The club has developed many young stars and remains a key player in the Bundesliga and UEFA competitions.`
    },
    {
      id: "astonvilla",
      name: "Aston Villa",
      logo: "/images/astonvilla_logo.png",
      history: `Founded in 1874, Aston Villa is one of the oldest and most historic clubs in England. Based in Birmingham, the club has won multiple league titles and was crowned European champions in 1982. After periods of struggle, Aston Villa is now rebuilding under strong leadership and continues to compete in the Premier League, fueled by passionate supporters and a proud heritage.`
    },
    {
      id: "psg",
      name: "Paris Saint-Germain",
      logo: "/images/psg_logo.png",
      history: `Paris Saint-Germain, or PSG, is the most successful club in French football. Founded in 1970, the club rose to global prominence in the 2010s with major signings like Neymar, Kylian Mbappé, and Lionel Messi. Known for their dominance in Ligue 1 and ambitious pursuit of the UEFA Champions League, PSG represents the modern era of football glamour and ambition.`
    }
  ];
  
export default teamsData;
  
  