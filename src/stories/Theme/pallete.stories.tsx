import {
  Accordion,
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  theme,
  Tr,
} from '@chakra-ui/react';
import { Palette } from '@emotion/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from '../../theme';

function PaletteDisplay({ palettes }: { palettes: { name: string; palette: Palette }[] }) {
  return (
    <TableContainer>
      <Table variant="unstyled" color="white" padding="3em">
        <Thead>
          <Tr>
            <Th>Name</Th>
            {Object.keys(colors.cyan).map((name) => (
              <Th key={name}>{name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {palettes.map((p) => (
            <Tr key={p.name}>
              <Td>{p.name}</Td>
              {Object.entries(p.palette)
                .filter(([colorName]) => !Number.isInteger(Number.parseInt(colorName, 10)))
                .map(([_, color]) => (
                  <Td height="100px" width="100px" bg={color} />
                ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default {
  title: 'Kidd/Theme',
  component: PaletteDisplay,
} as ComponentMeta<typeof PaletteDisplay>;

const Template: ComponentStory<typeof PaletteDisplay> = (args) => <PaletteDisplay {...args} />;

const namedKeys = new Set(['primary', 'secondary', 'tertiary', 'success', 'warning', 'error']);

const allPalettes = Object.entries(colors).map(([name, palette]) => ({ name, palette }));

export const NamedColors = Template.bind({});
NamedColors.args = {
  palettes: allPalettes.filter((p) => namedKeys.has(p.name)),
};

export const Colors = Template.bind({});
Colors.args = {
  palettes: allPalettes.filter((p) => !namedKeys.has(p.name)),
};
