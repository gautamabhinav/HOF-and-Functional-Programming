const books = [
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005 },
    { title: "The Help", author: "Kathryn Stockett", year: 2009 },
    { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
    { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
    { title: "The Martian", author: "Andy Weir", year: 2011 }
  ];
  
  const filteredBooks = books.filter(book => book.year >= 2010)
                            .map(book => ({ ...book, author: book.author.toUpperCase() }));
  
  console.log(filteredBooks);
  