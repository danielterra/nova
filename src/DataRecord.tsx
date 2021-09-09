import React from 'react';
import styled from "styled-components";
import { 
  TextHeadline1
} from "BaseStyles";
import { Section, SectionProps } from "SectionComponent";
import { LabeledText } from "TextComponent";

const Container = styled.div`
  max-width: 500px;
`;

interface iDataRecord {
  title: string;
  sections: SectionProps[];
}

interface DataRecordProps {
  data: iDataRecord;
}

export const DataRecord = (props: DataRecordProps) => {
  const {data} = props;
  console.log(data);

  return (
    <Container>
      <TextHeadline1>{data.title}</TextHeadline1>
      { data.sections.map(section =>
        <Section key={section.title} {...section}>
          {section.fields && section.fields.map(field => 
            <LabeledText key={field.label} label={field.label} content={field.content} />
          )}
        </Section>
      )}
    </Container>
  );
}
