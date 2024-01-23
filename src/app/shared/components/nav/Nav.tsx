import { Search, SearchOutlined } from "@mui/icons-material"
import { Input, InputAdornment, TextField, Typography } from "@mui/material"

interface SearchProps {
  onSearchChange: (a: string) => void
}

export const Nav: React.FC<SearchProps> = ({ onSearchChange}) => {


  return (
    <div className="p-4 bg-rose-700 flex items-center justify-between">
      <h1 className="text-white text-lg sm:text-xl md:text-2xl">Valorant Characters</h1> 
    
        <div className="flex gap-2">
          <input
            type="text"
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Pesquisar..."
            className="bg-rose-700 p-1 xs:p-0 sm:p-2 md:px-3 rounded border border-white text-white caret-white focus:outline-none"
          />
        </div>
     
    </div>
  );
}