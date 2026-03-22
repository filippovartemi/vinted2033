/**
 * Доля высоты строки, оставляемая в кадре (сверху): только портрет, без подписи снизу.
 * При необходимости для отдельной карточки задайте portraitFraction в элементе QUIZ_ITEMS.
 */
window.QUIZ_SETTINGS = {
  /** Чем меньше значение, тем меньше высота кадра — сильнее обрезается полоса с ФИО снизу (0.35…1). */
  portraitRowFraction: 0.66,
};

/** Каждый элемент: файл картинки, номер строки (0..rows-1), число строк на скриншоте, эталонный ответ */
window.QUIZ_ITEMS = [
  { src: "images/1.png", row: 0, rows: 4, answer: "Алексеев Николай Николаевич (1879 – 1964)" },
  { src: "images/1.png", row: 1, rows: 4, answer: "Андреевский Иван Ефимович (1831-1891)" },
  { src: "images/1.png", row: 2, rows: 4, answer: "Арсеньев Константин Константинович (1837-1919)" },
  { src: "images/1.png", row: 3, rows: 4, answer: "Балугьянский Михаил Андреевич (1769-1847)" },

  { src: "images/2.png", row: 0, rows: 4, answer: "Баршев Сергей Иванович (1808-1882)" },
  { src: "images/2.png", row: 1, rows: 4, answer: "Булыгин Александр Григорьевич (1851-1913)" },
  { src: "images/2.png", row: 2, rows: 4, answer: "Виноградов Павел Григорьевич (1854-1925)" },
  { src: "images/2.png", row: 3, rows: 4, answer: "Гамбаров Юрий Степанович (1884-1920)" },

  { src: "images/3.png", row: 0, rows: 4, answer: "Гернет Михаил Николаевич (1874-1953)" },
  { src: "images/3.png", row: 1, rows: 4, answer: "Гессен Владимир Матвеевич (1868-1920)" },
  { src: "images/3.png", row: 2, rows: 4, answer: "Градовский Александр Дмитриевич (1841-1889)" },
  { src: "images/3.png", row: 3, rows: 4, answer: "Грановский Тимофей Николаевич (1813-1855)" },

  { src: "images/4.png", row: 0, rows: 5, answer: "Девиер Антон Эммануилович (1682-1745)" },
  { src: "images/4.png", row: 1, rows: 5, answer: "Десницкий Семен Ефимович (1747-1789)" },
  { src: "images/4.png", row: 2, rows: 5, answer: "Дриль Дмитрий Андреевич (1846-1910)" },
  { src: "images/4.png", row: 3, rows: 5, answer: "Зарудный Митрофан Иванович (1834-1883)" },
  { src: "images/4.png", row: 4, rows: 5, answer: "Зарудный Сергей Иванович (1821-1887)" },

  { src: "images/5.png", row: 0, rows: 3, answer: "Кавелин Константин Дмитриевич (1818-1885)" },
  { src: "images/5.png", row: 1, rows: 3, answer: "Капустин Михаил Николаевич (1828-1892)" },
  { src: "images/5.png", row: 2, rows: 3, answer: "Кистяковский Богдан Александрович (1868-1920)" },

  { src: "images/6.png", row: 0, rows: 3, answer: "Ковалевский Максим Максимович (1851-1916)" },
  { src: "images/6.png", row: 1, rows: 3, answer: "Кокошкин Федор Федорович (1871-1918)" },
  { src: "images/6.png", row: 2, rows: 3, answer: "Кони Анатолий Федорович (1844-1927)" },

  { src: "images/7.png", row: 0, rows: 4, answer: "Коркунов Николай Михайлович (1853-1904)" },
  { src: "images/7.png", row: 1, rows: 4, answer: "Куракин Алексей Борисович (1759-1829)" },
  { src: "images/7.png", row: 2, rows: 4, answer: "Манасеин Николай Авксентьевич (1835-1895)" },
  { src: "images/7.png", row: 3, rows: 4, answer: "Мейер Дмитрий Иванович (1819-1856)" },

  { src: "images/8.png", row: 0, rows: 4, answer: "Муромцев Сергей Андреевич (1850-1910)" },
  { src: "images/8.png", row: 1, rows: 4, answer: "Набоков Дмитрий Николаевич (1827-1904)" },
  { src: "images/8.png", row: 2, rows: 4, answer: "Неволин Константин Алексеевич (1806-1855)" },
  { src: "images/8.png", row: 3, rows: 4, answer: "Никитин Алексей Максимович" },

  { src: "images/9.png", row: 0, rows: 4, answer: "Петражицкий Лев Иосифович (1867-1931)" },
  { src: "images/9.png", row: 1, rows: 4, answer: "Победоносцев Константин Петрович (1827-1907)" },
  { src: "images/9.png", row: 2, rows: 4, answer: "Покровский Иосиф Алексеевич (1868-1920)" },
  { src: "images/9.png", row: 3, rows: 4, answer: "Сергеевич Василий Иванович (1832-1910)" },

  { src: "images/10.png", row: 0, rows: 4, answer: "Сергеевский Николай Дмитриевич (1849-1908)" },
  { src: "images/10.png", row: 1, rows: 4, answer: "Солнцев Гавриил Ильич (1786-1866)" },
  { src: "images/10.png", row: 2, rows: 4, answer: "Сорокин Питирим Александрович (1889-1968)" },
  { src: "images/10.png", row: 3, rows: 4, answer: "Сперанский Михаил Михайлович (1772-1839)" },

  { src: "images/11.png", row: 0, rows: 5, answer: "Спасович Владимир Данилович (1829-1907)" },
  { src: "images/11.png", row: 1, rows: 5, answer: "Таганцев Николай Степанович (1843-1923)" },
  { src: "images/11.png", row: 2, rows: 5, answer: "Третьяков Иван Андреевич (1735-1776)" },
  { src: "images/11.png", row: 3, rows: 5, answer: "Трубецкой Евгений Николаевич (1863-1920)" },
  { src: "images/11.png", row: 4, rows: 5, answer: "Тургенев Александр Иванович (1784-1845)" },

  { src: "images/12.png", row: 0, rows: 4, answer: "Франк Семен Людвигович (1877-1950)" },
  { src: "images/12.png", row: 1, rows: 4, answer: "Чичерин Борис Николаевич (1828-1904)" },
  { src: "images/12.png", row: 2, rows: 4, answer: "Шершеневич Габриэль Феликсович (1883-1912)" },
  { src: "images/12.png", row: 3, rows: 4, answer: "Ягужинский Павел Иванович (1683-1736)" },
];
