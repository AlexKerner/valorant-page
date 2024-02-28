import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../../components/ui/3d-card";

interface CharacterCardProps {
  displayName: string;
  description: string | undefined;
  displayIconSmall: string;
  onClick: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  displayName,
  description,
  displayIconSmall,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      className="shadow cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-md hover:shadow-red-700"
    >
      <CardContainer className="flex w-full p-4 max-h-10">
        <CardBody className="flex items-center h-full">
          <CardItem translateZ="60" className="">
            <img src={displayIconSmall} alt="" className="size-20" />
          </CardItem>
          <CardItem translateZ="30" className="">
            <div className="flex flex-col ml-4 gap-1">
              <Typography variant="h6">{displayName}</Typography>
              <p className="line-clamp-3">
                {description || "No description available"}
              </p>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </Box>
  );
};
