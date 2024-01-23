import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CharacterCardProps {
  displayName: string;
  description: string | undefined;
  displayIconSmall: string
  onClick: () => void
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ displayName, description, displayIconSmall, onClick}) => {
  return (
      <Box onClick={onClick} className="cursor-pointer">
        <Card className="flex max-w-50 max-h-30 ">
        <CardContent className="flex items-center">
          
          <img src={displayIconSmall} alt="" className="size-20"/>
          <div className="flex flex-col ml-4 gap-1">
            <Typography variant="h6">{displayName}</Typography>
            <p className="line-clamp-3">{description || 'No description available'}</p>
          </div>
          
        </CardContent>
        
      </Card>
      </Box>
      
      
    
      
  );
};
