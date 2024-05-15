import { FC } from "react";
import Image from "next/image";
import { AspectRatio, Box, Divider, Group, Stack, Text } from "@mantine/core";
import { ProductionCompanie } from "../../../shared/type/type";

interface MovieDetailProps {
  keyYouTube?: string;
  title?: string;
  overview: string;
  production_companie: ProductionCompanie[];
}

export const MovieDetail: FC<MovieDetailProps> = ({
  production_companie,
  keyYouTube,
  overview,
  title,
}) => {
  const production = production_companie.map(({ logo_path, name, id }) => (
    <Group key={id}>
      {logo_path && (
        <Image
          style={{ objectFit: "contain" }}
          width={40}
          height={40}
          src={`https://image.tmdb.org/t/p/original/${logo_path}`}
          alt="logo companie"
        />
      )}
      <Text size="md" fw={700}>
        {name}
      </Text>
    </Group>
  ));

  const movieDetail = [
    {
      id: 0,
      label: "Trailer",
      children: (
        <AspectRatio w={500} ratio={16 / 9}>
          <iframe
            src={`https://www.youtube.com/embed/${keyYouTube}?modestbranding=1`}
            title={title || ""}
            style={{ border: 0, borderRadius: "9px" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      ),
    },
    {
      id: 1,
      label: "Description",
      children: <Text>{overview}</Text>,
    },
    {
      id: 2,
      label: "Production",
      children: <Stack gap="sm">{production}</Stack>,
    },
  ];

  const movieDetailFiltered = movieDetail.filter(({ label }) => {
    switch (label) {
      case "Trailer":
        return !!keyYouTube;
      case "Description":
        return !!overview;
      case "Production":
        return production_companie.length > 0;
      default:
        return true;
    }
  });

  return (
    <>
      {movieDetailFiltered.length > 0 && (
        <Box p={24} bg="white" style={{ borderRadius: "12px" }}>
          {movieDetailFiltered.map(({ id, label, children }, index, array) => (
            <>
              <Stack key={id} gap="sm">
                <Text size="xl" fw={700}>
                  {label}
                </Text>
                {children}
              </Stack>
              {index !== array.length - 1 && <Divider my="lg" color="gray.3" />}
            </>
          ))}
        </Box>
      )}
    </>
  );
};
