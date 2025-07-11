import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    color: '#333',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1a1a1a',
  },
  contactInfo: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
    textTransform: 'uppercase',
    borderBottom: '1 solid #ddd',
    paddingBottom: 2,
  },
  itemContainer: {
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 9,
    color: '#888',
    fontStyle: 'italic',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    color: '#444',
  },
  skillsText: {
    fontSize: 10,
    color: '#444',
    lineHeight: 1.5,
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
});

const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  });
};

const PDFDocument = ({ resumeData }) => {
  const { contact, summary, education, experience, projects, skills, certificates, languages } = resumeData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        {contact.name && (
          <View style={styles.header}>
            <Text style={styles.name}>{contact.name}</Text>
            {contact.email && <Text style={styles.contactInfo}>{contact.email}</Text>}
            {contact.phone && <Text style={styles.contactInfo}>{contact.phone}</Text>}
            {contact.address && <Text style={styles.contactInfo}>{contact.address}</Text>}
            {contact.linkedin && (
              <Text style={styles.contactInfo}>
                LinkedIn: <Link src={contact.linkedin} style={styles.link}>{contact.linkedin}</Link>
              </Text>
            )}
            {contact.github && (
              <Text style={styles.contactInfo}>
                GitHub: <Link src={contact.github} style={styles.link}>{contact.github}</Link>
              </Text>
            )}
            {contact.portfolio && (
              <Text style={styles.contactInfo}>
                Portfolio: <Link src={contact.portfolio} style={styles.link}>{contact.portfolio}</Link>
              </Text>
            )}
          </View>
        )}

        {/* Summary */}
        {summary.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.skillsText}>{summary.summary}</Text>
          </View>
        )}

        {/* Education */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, i) => (
              <View key={i} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{edu.degree}</Text>
                  <Text style={styles.itemDate}>
                    {formatDate(edu.start)} - {formatDate(edu.end)}
                  </Text>
                </View>
                <Text style={styles.itemSubtitle}>
                  {edu.institution} {edu.gpa && `(GPA: ${edu.gpa})`}
                </Text>
                {edu.location && <Text style={styles.itemSubtitle}>{edu.location}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp, i) => (
              <View key={i} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{exp.role}</Text>
                  <Text style={styles.itemDate}>
                    {formatDate(exp.start)} - {formatDate(exp.end)}
                  </Text>
                </View>
                <Text style={styles.itemSubtitle}>{exp.company}</Text>
                {exp.location && <Text style={styles.itemSubtitle}>{exp.location}</Text>}
                {exp.description && (
                  <View style={{ marginTop: 4 }}>
                    {exp.description.split('\n').filter(line => line.trim()).map((line, idx) => (
                      <View key={idx} style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>{line.trim()}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((project, i) => (
              <View key={i} style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{project.title}</Text>
                {project.url && (
                  <Text style={styles.itemSubtitle}>
                    <Link src={project.url} style={styles.link}>{project.url}</Link>
                  </Text>
                )}
                {project.description && (
                  <View style={{ marginTop: 4 }}>
                    {project.description.split('\n').filter(line => line.trim()).map((line, idx) => (
                      <View key={idx} style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>{line.trim()}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills.skills && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.skillsText}>{skills.skills}</Text>
          </View>
        )}

        {/* Certificates */}
        {certificates.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {certificates.map((cert, i) => (
              <View key={i} style={styles.itemContainer}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{cert.title}</Text>
                  <Text style={styles.itemDate}>{formatDate(cert.date)}</Text>
                </View>
                <Text style={styles.itemSubtitle}>{cert.issuer}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {languages.map((lang, i) => (
                <View key={i} style={{ marginRight: 20, marginBottom: 8 }}>
                  <Text style={styles.itemTitle}>{lang.language}</Text>
                  <Text style={styles.itemSubtitle}>{lang.proficiency}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PDFDocument;