import { Search, SearchOutlined } from "@mui/icons-material"
import { Input, InputAdornment, TextField, Typography } from "@mui/material"

interface SearchProps {
  onSearchChange: (a: string) => void
}

export const Nav: React.FC<SearchProps> = ({ onSearchChange}) => {


  return (
    <div className="p-4 bg-rose-800 flex justify-between">
      <Typography variant="h4" className="text-white">Valorant Characters</Typography>
    
        <div className="flex gap-2">
          <input
            type="text"
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search"
            className="bg-rose-800 p-3 rounded border border-white text-white caret-white"
          />
        </div>
     
    </div>
  );
}