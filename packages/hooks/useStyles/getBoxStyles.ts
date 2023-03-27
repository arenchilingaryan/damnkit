import { BoxConfig, BoxProps } from 'components/box';
import { getBreakpointsStyles } from 'hooks/useStyles/getBreakpointsStyles';

function getDirectionOfBoxProps(dir: string) {
  const obj: { [key: string]: string } = {
    t: 'top',
    r: 'right',
    b: 'bottom',
    l: 'left',
  };
  if (dir.length === 1) {
    if (dir === 'p') return 'padding';
    else return 'margin';
  }

  const prefix = dir[0] === 'p' ? 'padding' : 'margin';
  const postfix = obj[dir[1]];

  return prefix + '-' + postfix;
}

export function getBoxStyles(props: BoxProps) {
  const { mb, mr, mt, p, pb, pl, pr, pt, ml, m } = props;
  const gaps: BoxConfig = { mb, mr, mt, ml, m, p, pb, pl, pr, pt };
  const mediaVariant = props.mediaVariant || 'min-width';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const existGapsProps: any = {};

  const additionalStyles = [];

  for (const key in gaps) {
    const element = gaps[key as keyof BoxConfig];
    if (element !== undefined) existGapsProps[key] = element;
  }

  for (const key in existGapsProps) {
    const direction = getDirectionOfBoxProps(key);
    const styleArr = getBreakpointsStyles(existGapsProps[key], mediaVariant, direction);
    additionalStyles.push(...styleArr);
  }

  return additionalStyles;
}
