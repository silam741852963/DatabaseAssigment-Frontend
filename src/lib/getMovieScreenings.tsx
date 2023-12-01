export default async function getMovieScreenings(): Promise<movieScreening[]> {
  const res: movieScreening[] = [
    {
      ID: "111111124",
      RNUMBER: "A002",
      MOVIETIME: "12/1/2023",
      MSSTARTIME: "8:00:00",
    },
    {
      ID: "111111113",
      RNUMBER: "A003",
      MOVIETIME: "12/2/2023",
      MSSTARTIME: "8:00:00",
    },
    {
      ID: "111111117",
      RNUMBER: "B001",
      MOVIETIME: "12/3/2023",
      MSSTARTIME: "8:00:00",
    },
    {
      ID: "111111120",
      RNUMBER: "B004",
      MOVIETIME: "12/4/2023",
      MSSTARTIME: "8:00:00",
    },
    {
      ID: "111111126",
      RNUMBER: "B005",
      MOVIETIME: "12/5/2023",
      MSSTARTIME: "8:00:00",
    },
  ];
  return res;
}