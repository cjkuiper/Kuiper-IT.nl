FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Kuiper-IT.Web/Kuiper-IT.Web.csproj", "Kuiper-IT.Web/"]
COPY ["Kuiper-IT.Shared/Kuiper-IT.Shared.csproj", "Kuiper-IT.Shared/"]
COPY ["Kuiper-IT.Data/Kuiper-IT.Data.csproj", "Kuiper-IT.Data/"]
RUN dotnet restore "Kuiper-IT.Web/Kuiper-IT.Web.csproj"
COPY . .
WORKDIR "/src/Kuiper-IT.Web"
RUN dotnet build "Kuiper-IT.Web.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Kuiper-IT.Web.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Kuiper-IT.Web.dll"]