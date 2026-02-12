'use client';

import {
    TextInput,
    Select,
    Textarea,
    Button,
    Group,
    Box,
    Container,
    Title,
    Text,
    Paper,
    Checkbox,
    SimpleGrid,
    List,
    ThemeIcon,
    rem
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSend, IconCheck } from '@tabler/icons-react';

export function ConsultationForm() {
    const form = useForm({
        initialValues: {
            companyName: '',
            contactPerson: '',
            phone: '',
            businessNumber: '',
            lineCount: '',
            inquiry: '',
            agreement: false,
        },

        validate: {
            companyName: (value) => (value.length < 2 ? '기업명을 정확히 입력해주세요' : null),
            contactPerson: (value) => (value.length < 2 ? '담당자명을 입력해주세요' : null),
            phone: (value) => (/^\d{2,3}-?\d{3,4}-?\d{4}$/.test(value) ? null : '올바른 전화번호 형식이 아닙니다'),
            agreement: (value) => (value ? null : '개인정보 수집 및 이용에 동의해주세요'),
        },
    });

    return (
        <Box py={80} id="consultation" bg="gray.0">
            <Container size="lg">
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50} style={{ alignItems: 'flex-start' }}>

                    {/* Left Content Area (Text Info) */}
                    <Box visibleFrom="md" pt="md">
                        <Text c="orange" fw={700} tt="uppercase" mb="xs">Consultation</Text>
                        <Title order={2} c="navy.9" mb="xl" style={{ fontSize: '36px', lineHeight: 1.2 }}>
                            무료 견적 상담<br />
                            <Text span c="navy.7" inherit>기업 통신 전문 컨설턴트가</Text><br />
                            최적의 솔루션을<br />
                            제안해 드립니다.
                        </Title>

                        <List
                            spacing="md"
                            size="lg"
                            center
                            icon={
                                <ThemeIcon color="orange" size={24} radius="xl">
                                    <IconCheck style={{ width: rem(16), height: rem(16) }} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <Text span fw={600} c="navy.9">30분 내 신속 상담</Text>
                            </List.Item>
                            <List.Item>
                                <Text span fw={600} c="navy.9">최대 지원금 혜택 안내</Text>
                            </List.Item>
                            <List.Item>
                                <Text span fw={600} c="navy.9">기존 위약금 해결 방안 제시</Text>
                            </List.Item>
                        </List>

                        <Paper p="xl" bg="white" mt={50} radius="md" withBorder>
                            <Text size="sm" c="dimmed" lh={1.6}>
                                오름정보통신은 고객님의 비즈니스 환경을 분석하여<br />
                                가장 효율적인 통신 요금과 단말기 정책을 컨설팅해 드립니다.<br />
                                지금 바로 문의하세요.
                            </Text>
                        </Paper>
                    </Box>

                    {/* Right Form Area */}
                    <Box>
                        <Paper withBorder shadow="lg" p={40} radius="lg" bg="white">
                            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                                <Title order={4} mb="lg" c="navy.9">상담 신청서 작성</Title>

                                <Group grow mb="md">
                                    <TextInput
                                        label="기업명 (법인명)"
                                        placeholder="(주)오름정보통신"
                                        required
                                        size="md"
                                        {...form.getInputProps('companyName')}
                                        radius="md"
                                    />
                                </Group>

                                <Group grow mb="md">
                                    <TextInput
                                        label="담당자명"
                                        placeholder="홍길동"
                                        required
                                        size="md"
                                        {...form.getInputProps('contactPerson')}
                                        radius="md"
                                    />
                                    <TextInput
                                        label="연락처"
                                        placeholder="010-1234-5678"
                                        required
                                        size="md"
                                        {...form.getInputProps('phone')}
                                        radius="md"
                                    />
                                </Group>

                                <TextInput
                                    label="사업자등록번호 (선택)"
                                    placeholder="000-00-00000"
                                    description="빠른 사전 심사를 위해 입력을 권장합니다"
                                    mb="md"
                                    size="md"
                                    {...form.getInputProps('businessNumber')}
                                    radius="md"
                                />

                                <Select
                                    label="필요 회선 수"
                                    placeholder="선택해주세요"
                                    data={['1~5회선', '6~10회선', '11~50회선', '51회선 이상 (대량 개통)']}
                                    mb="md"
                                    size="md"
                                    {...form.getInputProps('lineCount')}
                                    radius="md"
                                />

                                <Textarea
                                    label="문의 사항"
                                    placeholder="원하시는 단말기 기종이나 특정 요금제, 기타 문의사항을 적어주세요."
                                    minRows={4}
                                    mb="xl"
                                    size="md"
                                    {...form.getInputProps('inquiry')}
                                    radius="md"
                                />

                                <Paper withBorder p="md" mb="xl" bg="gray.0" radius="md">
                                    <Checkbox
                                        label="[필수] 개인정보 수집 및 이용에 동의합니다."
                                        {...form.getInputProps('agreement', { type: 'checkbox' })}
                                        color="navy"
                                        radius="xs"
                                    />
                                    <Text size="xs" c="dimmed" mt="xs" pl={28}>
                                        수집된 정보는 상담 및 가입 심사 목적으로만 사용되며, 관련 법령에 따라 안전하게 처리됩니다.
                                    </Text>
                                </Paper>

                                <Button fullWidth type="submit" size="xl" radius="md" color="orange" rightSection={<IconSend size={20} />}>
                                    무료 견적 상담 신청하기
                                </Button>
                            </form>
                        </Paper>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
