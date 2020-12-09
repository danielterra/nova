import React, { useState } from 'react';
import styled from "styled-components";
import { 
  TextHeadline1,
  TextSection,
  primaryColor
} from "BaseStyles";
import { Section, SectionProps } from "SectionComponent";
import { LabeledText, LabeledTextProps } from "TextComponent";

const Container = styled.div`
  max-width: 500px;
`;

interface DataRecord {
  title: string;
  sections: SectionProps[];
}

interface DataRecordProps {
  data: DataRecord;
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
