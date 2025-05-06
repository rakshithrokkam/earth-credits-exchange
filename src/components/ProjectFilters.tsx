
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from '@/components/ui/slider';
import { TreeDeciduous, Leaf, Coins, Search, Filter } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type ProjectFiltersProps = {
  onFilterChange: (filters: Record<string, any>) => void;
};

const ProjectFilters = ({ onFilterChange }: ProjectFiltersProps) => {
  const isMobile = useIsMobile();
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [filters, setFilters] = useState({
    type: '',
    region: '',
    priceMin: 0,
    priceMax: 50,
    search: '',
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, search: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleTypeChange = (value: string) => {
    const newFilters = { ...filters, type: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRegionChange = (value: string) => {
    const newFilters = { ...filters, region: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    const newFilters = { ...filters, priceMin: value[0], priceMax: value[1] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const newFilters = {
      type: '',
      region: '',
      priceMin: 0,
      priceMax: 50,
      search: '',
    };
    setFilters(newFilters);
    setPriceRange([0, 50]);
    onFilterChange(newFilters);
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search projects..."
          className="pl-10"
          value={filters.search}
          onChange={handleSearch}
        />
      </div>

      <div>
        <Label className="mb-2 block">Project Type</Label>
        <div className="grid grid-cols-3 gap-2">
          <Button 
            variant={filters.type === 'forest' ? 'default' : 'outline'} 
            className="flex flex-col items-center justify-center h-20"
            onClick={() => handleTypeChange(filters.type === 'forest' ? '' : 'forest')}
          >
            <TreeDeciduous className={`h-6 w-6 ${filters.type === 'forest' ? 'text-primary-foreground' : 'text-primary'} mb-1`} />
            <span className="text-xs text-center">Forest</span>
          </Button>
          <Button 
            variant={filters.type === 'renewable' ? 'default' : 'outline'} 
            className="flex flex-col items-center justify-center h-20"
            onClick={() => handleTypeChange(filters.type === 'renewable' ? '' : 'renewable')}
          >
            <Leaf className={`h-6 w-6 ${filters.type === 'renewable' ? 'text-primary-foreground' : 'text-primary'} mb-1`} />
            <span className="text-xs text-center">Renewable</span>
          </Button>
          <Button 
            variant={filters.type === 'community' ? 'default' : 'outline'} 
            className="flex flex-col items-center justify-center h-20"
            onClick={() => handleTypeChange(filters.type === 'community' ? '' : 'community')}
          >
            <Coins className={`h-6 w-6 ${filters.type === 'community' ? 'text-primary-foreground' : 'text-primary'} mb-1`} />
            <span className="text-xs text-center">Community</span>
          </Button>
        </div>
      </div>

      <div>
        <Label htmlFor="region" className="mb-2 block">Region</Label>
        <Select value={filters.region} onValueChange={handleRegionChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All regions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All regions</SelectItem>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="north-america">North America</SelectItem>
            <SelectItem value="oceania">Oceania</SelectItem>
            <SelectItem value="south-america">South America</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <Label>Price Range</Label>
          <span className="text-sm text-muted-foreground">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          defaultValue={[0, 50]}
          max={50}
          step={1}
          value={priceRange}
          onValueChange={handlePriceChange}
          className="my-4"
        />
      </div>

      <Button variant="ghost" className="w-full" onClick={handleReset}>
        Reset Filters
      </Button>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <div className="flex items-center justify-between mb-4">
          <Input
            placeholder="Search projects..."
            className="mr-2"
            value={filters.search}
            onChange={handleSearch}
          />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader>
                <SheetTitle>Filter Projects</SheetTitle>
                <SheetDescription>
                  Narrow down projects by type, region, and price.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <FiltersContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </>
    );
  }

  return (
    <div className="bg-white border border-earth-100 rounded-lg p-6 space-y-6">
      <FiltersContent />
    </div>
  );
};

export default ProjectFilters;
