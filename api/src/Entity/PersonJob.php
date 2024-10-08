<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PersonJobRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PersonJobRepository::class)]
#[ApiResource(
    outputFormats: ['jsonld' => ['application/ld+json']],
    normalizationContext: ['groups' => ['personJob:read']],
    paginationEnabled: false
)]
class PersonJob
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['personJob:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['personJob:read'])]
    private ?string $job = null;

    #[ORM\ManyToOne]
    #[Groups(['personJob:read'])]
    private ?Company $company = null;

    #[ORM\ManyToOne(inversedBy: 'personJobs')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['personJob:read'])]
    private ?Person $person = null;

    #[ORM\ManyToOne]
    #[Groups(['personJob:read'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Source $source = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(['personJob:read'])]
    private ?\DateTimeInterface $startDate = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(['personJob:read'])]
    private ?\DateTimeInterface $endDate = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJob(): ?string
    {
        return $this->job;
    }

    public function setJob(?string $job): static
    {
        $this->job = $job;

        return $this;
    }

    public function getCompany(): ?Company
    {
        return $this->company;
    }

    public function setCompany(?Company $company): static
    {
        $this->company = $company;

        return $this;
    }

    public function getPerson(): ?Person
    {
        return $this->person;
    }

    public function setPerson(?Person $person): static
    {
        $this->person = $person;

        return $this;
    }

    public function getSource(): ?Source
    {
        return $this->source;
    }

    public function setSource(?Source $source): static
    {
        $this->source = $source;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(?\DateTimeInterface $startDate): static
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(?\DateTimeInterface $endDate): static
    {
        $this->endDate = $endDate;

        return $this;
    }
}
